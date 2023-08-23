import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref, set } from 'firebase/database';

import { auth, database } from 'Utils/firebase';

export default function useUser() {
  const [userId, setUserId] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);

  // Get the user's ID
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user?.uid);
      }
    });
  }, []);

  useEffect(() => {
    if (userId) {
      const userRef = ref(database, `users/${userId}`);

      const unsubscribe = onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        setProfileData(userData);
      });

      return () => {
        // Unsubscribe from the onValue listener when the component unmounts
        unsubscribe();
      };
    }
  }, [userId]);

  return { userId, profileData };
}
