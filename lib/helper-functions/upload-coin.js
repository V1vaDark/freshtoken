import { validateProfileImage } from "../validations/image-validations";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/authentication/firebase-config";
import { v4 } from "uuid";
import { db } from "../authentication/firebase-config";
import { collection, addDoc } from "firebase/firestore";

export const uploadCoin = async (
  coinImg,
  nameInput,
  symbol,
  network,
  contactAddress,
  description,
  day,
  month,
  year,
  customChart,
  customSwap,
  websiteURL,
  telegramURL,
  twitterURL,
  discordURL,
  otherURL,
  cmcURL,
  cgURL,
  contactTelegramURL,
  creatorEmail
) => {
  if (
    !coinImg ||
    !nameInput ||
    !symbol ||
    !network ||
    !contactAddress ||
    !description ||
    !websiteURL ||
    !telegramURL ||
    !contactTelegramURL
  ) {
    return false;
  }

  const result = validateProfileImage(coinImg);
  if (result !== "success") return false;

  const imageRef = ref(
    storage,
    `${creatorEmail}/${nameInput}/${coinImg.name + v4()}`
  );

  const status = await uploadBytes(imageRef, coinImg)
    .then((snapshot) => {
      return snapshot;
    })
    .catch((error) => {
      return false;
    });

  if (!status) return false;

  const uploadImgUrl = await getDownloadURL(status.ref).then((url) => {
    return url;
  });

  const projectsCollectionRef = collection(db, "projects");
  try {
    await addDoc(projectsCollectionRef, {
      url: uploadImgUrl,
      nameInput,
      symbol,
      network,
      contactAddress,
      description,
      day,
      month,
      year,
      customChart,
      customSwap,
      websiteURL,
      telegramURL,
      twitterURL,
      discordURL,
      otherURL,
      cmcURL,
      cgURL,
      contactTelegramURL,
      creatorEmail,
      vote: 0,
    });
  } catch (error) {
    return false;
  }

  return true;
};