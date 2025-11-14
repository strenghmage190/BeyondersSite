interface AvatarProps {
  sanity: number;
  maxSanity: number;
  vitality: number;
  maxVitality: number;
  avatarUrl?: string;
  insaneAvatarUrl?: string;
  deadAvatarUrl?: string;
}

export const getAvatarForSanityAndVitality = ({
  sanity,
  maxSanity,
  vitality,
  avatarUrl,
  insaneAvatarUrl,
  deadAvatarUrl,
}: AvatarProps): string | undefined => {
  const sanityPercentage = maxSanity > 0 ? (sanity / maxSanity) * 100 : 100;

  if (vitality <= 0) {
    return deadAvatarUrl || avatarUrl;
  }
  if (sanityPercentage < 40) {
    return insaneAvatarUrl || avatarUrl;
  }
  return avatarUrl;
};