import React from 'react'

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useCallback } from 'react'
import { Camera } from 'iconsax-react'

declare global {
    var cloudinary: any;
}

type ImageUploadProps = {
    onChange: (value:string) => void
    value:string
    text: string
}

const ImageUpload = ({ onChange, value, text}: ImageUploadProps) => {


    const handleUpload = useCallback((result:any) => {
        onChange(result.info.secure_url)
    },[onChange])

  return (
    <CldUploadWidget
    onUpload={handleUpload}
    uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}
    options={{ maxFiles: 1, sources: ['local', 'url'] }}
    >

        {({open}) => {
            return (
                <>
                <p className="mt-4 text-xs md:text-sm xl:text-base text-[#161618]">{text}</p>
                <div onClick={() => open?.()} className='relative cursor-pointer hover:opacity-70 border-dashed border flex flex-col justify-center items-center h-[100px] mt-2 rounded-md duration-200'>
                    <Camera size="20" className='text-primary'/>        
                    <div className='text-xs md:text-sm xl:text-base text-[#161618] mt-1'>
                        Click to upload
                    </div>

                    {value && (
                        <div className='absolute inset-0 w-full h-full'>
                            <Image alt='Uploaded Image' fill src={value} className='object-cover rounded-md'/>
                        </div>
                    )}
                </div>
                </>
                
            )
        }}

    </CldUploadWidget>
  )
}

export default ImageUpload