import { Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { useController } from "react-hook-form";
import { MdUpload, MdUploadFile } from "react-icons/md";

export interface DropZoneParams {
  name: string;
}

function DropZone({ name: id }: DropZoneParams) {
  const {
    field: { onChange, value },
  } = useController({ name: id });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [id]
  );
  const files: File[] = useMemo(() => {
    const values = value as { [key: string]: File[] };

    return values[id] as File[];
  }, [id]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <VStack
      border={2}
      borderRadius={"lg"}
      borderColor={"gray.300"}
      {...getRootProps()}
      backgroundColor={"gray.300"}
      px={10}
      py={4}
      textAlign={"center"}
      w={"full"}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <>
          <MdUploadFile color="primary.600" size={"32px"} />
          <Text>Suelta los archivos aquí</Text>
          <Text pb={10}>Máximo 2MB</Text>
        </>
      ) : (
        <>
          <MdUploadFile color="primary.600" size={"32px"} />
          <Text>Clickea o Arrastra archivos</Text>
          <Text>Máximo 2MB</Text>
          {files && files.length > 0 && (
            <VStack>
              <Text>Archivos Añadidos</Text>
              {files.map((file, index) => (
                <Text key={index}>{file.name}</Text>
              ))}
            </VStack>
          )}
          <Button
            borderColor={"primary.600"}
            variant={"outline"}
            leftIcon={<MdUpload />}
            fontWeight="bold"
          >
            Upload
          </Button>
        </>
      )}
    </VStack>
  );
}

export default DropZone;
