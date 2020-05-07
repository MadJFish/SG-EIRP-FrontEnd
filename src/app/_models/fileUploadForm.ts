import { DocumentDto } from "./document";
import { FileLikeObject, FileItem } from "ng2-file-upload";

export class FileUploadForm {
    file: FileItem;
    document: DocumentDto;
}