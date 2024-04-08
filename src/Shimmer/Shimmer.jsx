import { ShimmerSimpleGallery } from "react-shimmer-effects";
export default function Shimmer() {

  return (
    <>
      <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption />
      <ShimmerSimpleGallery card imageHeight={300} />
      <ShimmerSimpleGallery card imageHeight={300} caption />
    </>
  )

}
