import { storage } from '@/configs/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const getURLImageFromStorage = (fileName: string) => {
  const imgRef = ref(storage, fileName)
  const url = getDownloadURL(imgRef)
    .then(url => {
      return url
    })
    .catch(error => {
      console.log(error)
      return ''
    })

  return url
}

export const uploadImgToStorage = async (file: any): Promise<string> => {
  const storageRef = ref(storage, `posts/${file.name}`)

  const url = await uploadBytes(storageRef, file)
    .then(async (snapshot) => {
      console.log('File uploaded!')
      const urlFromStorage = await getURLImageFromStorage(snapshot.metadata.fullPath)
      return urlFromStorage
    })
    .catch((e) => {
      console.log(e)
      return ''
    })

  return url
}
