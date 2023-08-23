import React from 'react';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// @ts-ignore
import FastImage from 'expo-fast-image';
import * as ImagePicker from 'expo-image-picker';
import { ref as dbRef, update } from 'firebase/database';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

import { database, storage } from 'Utils/firebase';

// @ts-ignore
import useUser from 'Hooks/useUser';

import { AvatarContainer, Circle, EditIconWrapper, UserName } from './styles';

function UserImage({ name, avatar }: any) {
  const user = useUser();
  const [isUploading, setIsUploading] = React.useState(false);
  const handleAvatarUpload = async () => {
    // Request permission to access camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [0.5, 0.5],
      quality: 0,
    });

    if (!result.canceled) {
      setIsUploading(true);

      const { assets } = result;

      const { uri } = assets[0];

      // Create a unique file name
      const filename = `${Date.now()}.jpg`;

      // Create reference to the image in Firebase storage
      const storageRef = ref(storage, filename);

      // Convert the image URI to a Blob
      const response = await fetch(uri);
      const blob = await response.blob();

      // Upload the image to Firebase storage
      // const uploadTask = imageRef.put(blob);

      const uploadTask = uploadBytesResumable(storageRef, blob);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);

            setIsUploading(false);

            const userRef = dbRef(database, `/users/${user?.profileData?.id}`);
            update(userRef, {
              avatar: downloadURL,
            });
          });
        },
      );
    }
  };

  return (
    <AvatarContainer onPress={handleAvatarUpload}>
      <Circle>
        {avatar && !isUploading ? (
          <FastImage
            source={{
              uri: avatar,
            }}
            style={{ width: 86, height: 86 }}
          />
        ) : (
          <>
            {isUploading ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              <UserName>{name?.charAt(0)}</UserName>
            )}
          </>
        )}
      </Circle>
      <EditIconWrapper>
        <MaterialIcons color="black" name="edit" size={17} />
      </EditIconWrapper>
    </AvatarContainer>
  );
}

export default UserImage;
