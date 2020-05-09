import { DocumentDto } from './documentDto';
import { FileLikeObject, FileItem } from "ng2-file-upload";

export class FileUploadForm {
    file: FileItem;
    document: DocumentDto;
}