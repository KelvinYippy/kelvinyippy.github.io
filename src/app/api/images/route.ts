// // pages/api/fetchImages.js

import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from "next/server";


export async function GET(_: NextRequest) {
  const publicDir = path.join(process.cwd(), 'public', 'photos'); // Path to your images folder
  // Read the directory
  const fileNames = fs.readdirSync(publicDir);

  // Generate URLs for each image
  const imageUrls = fileNames.map(fileName => {
    return `/photos/${fileName}`; // Assuming your images are located in a folder named 'images' inside the 'public' folder
  });

  return NextResponse.json({ imageUrls: imageUrls }, { status: 200 });

}
