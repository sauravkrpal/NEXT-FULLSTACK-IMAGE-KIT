import mongoose, {Schema, model , models }  from "mongoose";

export const Video_dimensions = {
    width: 1080,
    height:1920
} as const;

export interface IVideo{
    _id?: mongoose.Types.ObjectId
    title: String;
    description: string;
    videoUrl:string;
    ThumbnailUrl:string;
    controls?:boolean;
    transformation?:{
        height: number;
        weight: number;
        quality?: number;

    };
}

const videoschema = new Schema<IVideo>(
    {
        title:{type: String, required:true,},
        description:{type: String, required:true,},
        videoUrl:{type: String, required:true,},
        ThumbnailUrl:{type: String, required:true,},
        controls:{type: Boolean, required:true,},
        transformation:{
            height:{type: Number, Default: Video_dimensions.height},
            weight:{type: Number, Default: Video_dimensions.height},
            quality:{type: Number, min:1, max:100},

        }
    },
    {
        timestamps: true;
        
    }
)


const Video = models?.Video || model<IVideo>("User", videoschema);

export default Video;