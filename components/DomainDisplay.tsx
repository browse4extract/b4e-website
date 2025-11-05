'use client';

import React, { useState, useEffect } from 'react';

export const DomainDisplay: React.FC = () => {
  const [domain, setDomain] = useState('browse4extract.github.io');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDomain(window.location.hostname);
    }
  }, []);

  return <span className="text-white font-mono">{domain}</span>;
};
