import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CONTENT_FILES, DEFAULT_CONTENT, PUBLIC_ROOT } from "./content";

const ContentContext = createContext(DEFAULT_CONTENT);

/** Fill in anything a section file is missing so the layout never breaks. */
const mergeSection = (fallback, loaded) => {
  if (loaded === undefined || loaded === null) return fallback;
  if (Array.isArray(fallback) || Array.isArray(loaded)) return loaded;
  if (typeof fallback === "object" && typeof loaded === "object") {
    return { ...fallback, ...loaded };
  }
  return loaded;
};

const loadSection = async (name) => {
  try {
    const res = await fetch(`${PUBLIC_ROOT}/content/${name}.json`, {
      cache: "no-cache"
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    return null;
  }
};

export const ContentProvider = ({ children }) => {
  const [sections, setSections] = useState(null);

  useEffect(() => {
    let alive = true;

    Promise.all(CONTENT_FILES.map((name) => loadSection(name).then((data) => [name, data])))
      .then((entries) => {
        if (!alive) return;
        const loaded = {};
        entries.forEach(([name, data]) => {
          if (data) loaded[name] = data;
        });
        setSections(loaded);
      })
      .catch(() => {
        /* keep the bundled copy */
      });

    return () => {
      alive = false;
    };
  }, []);

  const value = useMemo(() => {
    if (!sections) return DEFAULT_CONTENT;
    const merged = { ...DEFAULT_CONTENT };
    Object.keys(sections).forEach((key) => {
      merged[key] = mergeSection(DEFAULT_CONTENT[key], sections[key]);
    });
    return merged;
  }, [sections]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export const useContent = () => useContext(ContentContext);

export default ContentProvider;
