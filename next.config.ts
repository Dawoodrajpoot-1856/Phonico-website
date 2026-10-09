import { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  partialPrefetching: true,
};

export default nextConfig;

// cache componnets     route hata k api function bnana h
//  jo api server pa h woh servcer pa ho aur jp client ki h client pa ho
//  next auth ma seesion sa lekar aik aik cheez krni h aik aik cheez krni h jwt kia h sab kuch
// ,next config ma 4 cheezan implem t ki h woh b dekhni h k kia kerti h h

// npm install babel-plugin-react-compiler
