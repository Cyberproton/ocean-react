import { BackButton } from "@/components/BackButton";
import { FileUploader } from "@/components/FileUploader/file-dropzone";
import { TopBar, TopBarTitle } from "@/components/TopBar";
import { Label } from "@/components/ui/label";

export const SearchBySoundPage = () => {
  return (
    <>
      <TopBar>
        <BackButton />
        <TopBarTitle>Tìm kiếm bằng đoạn nhạc</TopBarTitle>
      </TopBar>

      <div className="m-4">
        <Label className="text-base" htmlFor="file-uploader">
          Tệp âm thanh trên thiết bị
        </Label>
        <FileUploader id="file-uploader" className="mt-2" />
      </div>
    </>
  );
};
