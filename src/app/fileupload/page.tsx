import React, { useRef } from "react";
import upload from "../../../public/images/upload.png";
import Image from "next/image";
import { promises as fs } from "fs";

function page() {
  async function fileUpload(formData: FormData): Promise<void> {
    "use server"; // Marks this as a server-side function

    const file = formData.get("file") as File;

    if (!file || file.size === 0) {
      console.error("No file found");
      return;
    }

    try {
      // Read the file data as a buffer
      const data = await file.arrayBuffer();
      const buffer = Buffer.from(data);

      // Save the file to the local file system
      const filePath = `${process.cwd()}/tmp/${file.name}`;
      await fs.writeFile(filePath, buffer);

      console.log(`File saved at ${filePath}`);
    } catch (error) {
      console.error(`Failed to upload file: ${error}`);
    }
  }

  return (
    <section className="flex justify-center items-center  py-12 font-nunito">
      <div className="w-[43rem] h-[25rem] border-2 border-dotted rounded-md shadow-lg">
        <div className="flex justify-between p-4">
          <div className="flex flex-col  space-y-2">
            <h1 className="text-[1.3rem] font-bold">Media Upload</h1>
            <h3 className="w-[30rem] text-[0.9rem] text-gray-600">
              Add your documents here, and you can upload up to 5 files max
            </h3>
          </div>
          <div className="flex justify-end items-center mx-6 font-bold text-[1.5rem]">
            X
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-[40rem] h-[11rem] border-2 border-dashed rounded-md">
            <div className="flex flex-col justify-center items-center py-4 space-y-1">
              <Image src={upload} alt="upload" />
              <h1>Drag your file(s) to start uploading</h1>
              <h3>OR</h3>
              <form>
                <button className="w-[10rem] h-[2.5rem] bg-[#635BFF] text-white rounded-md hover:bg-blue-600">
                  Browse Files
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mx-6 mt-2">
          Only support .jpg, .png and .svg and zip files
        </div>

        <div className="flex justify-end items-center text-center space-x-2 mx-6">
          <button className="w-[6rem] h-[2.5rem] bg-[#F94F4F] text-white rounded-md">
            Cancel
          </button>
          <form
            className="flex justify-center items-center "
            action={fileUpload}
     
          >
            <input
              type="file"
              name="file"
              accept=".jpg,.png,.svg,.zip"
              className="mb-4"
            />
            <button
              type="submit"
              className="w-[10rem] h-[2.5rem] bg-[#635BFF] text-white rounded-md hover:bg-blue-600"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
