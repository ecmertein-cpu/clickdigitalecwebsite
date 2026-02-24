import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  ogType?: string;
}

const SEO = ({ title, description, ogType = 'website' }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | ClikDigitalEC`;
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update OpenGraph Tags
    const updateOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:type', ogType);
    updateOG('og:url', window.location.href);

    // Facebook Pixel ViewContent Event
    if ((window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: title,
        content_category: ogType
      });
    }
  }, [title, description, ogType]);

  return null;
};

export default SEO;
