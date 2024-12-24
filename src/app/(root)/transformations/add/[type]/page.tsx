import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import React from "react";

const AddTransformationTypePage: React.FC<SearchParamProps> = async ({
  params,
}) => {
  const { type } = await params;
  const transformation = transformationTypes[type];
  return (
    <Header title={transformation.title} subTitle={transformation.subTitle} />
  );
};

export default AddTransformationTypePage;
