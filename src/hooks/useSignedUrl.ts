import { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

export const useSignedUrl = (bucket: string, path: string | null | undefined, expiration: number = 3600) => {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!path) {
      setSignedUrl(null);
      return;
    }

    const fetchSignedUrl = async () => {
      const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiration);
      if (error) {
        console.error('Error creating signed URL:', error);
        setSignedUrl(null);
      } else {
        setSignedUrl(data.signedUrl);
      }
    };

    fetchSignedUrl();
  }, [bucket, path, expiration]);

  return signedUrl;
};
