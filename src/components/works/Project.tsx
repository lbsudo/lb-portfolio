import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { list } from '../../projects/projectData'
import { FaGithub, FaLink } from "react-icons/fa6";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNextui, SiNetlify, SiReact, SiFramer } from "react-icons/si";



interface Item {
  title: string;
  img: string;
  description: string;
  github: string;
  route: string;
  react: boolean;
  next: boolean;
  ts: boolean;
  tw: boolean;
  fm: boolean;
  nu: boolean;
}


export default function Project() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <>
      <div className="gap-2 grid grid-cols-2 ">
        {list.map((item, index) => (
          <>
            <Card shadow="sm" key={index} isPressable onPress={() => { onOpen(); setSelectedItem(item); }}>
              <CardBody className="overflow-visible p-0 ">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className=" object-cover relative"
                  src={item.img}
                />
                <div className="absolute w-full z-10 ">
                  <div className="flex space-x-2 w-full justify-end py-2 pr-2">
                    <button className="bg-stone-800 p-2 rounded-full">
                      <Link href={item.github} target="_blank">
                        <FaGithub className="text-2xl" />
                      </Link>
                    </button>
                    <button className="bg-stone-800 p-2 rounded-full">
                      <Link href={item.route} target="_blank">
                        <FaLink className="text-2xl" />
                      </Link>
                    </button>
                  </div>
                </div>
              </CardBody>
              <CardFooter className="flex justify-center items-center">
                <b className="">{item.title}</b>
              </CardFooter>
            </Card>
          </>
        ))}
        {selectedItem && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">{selectedItem.title}</ModalHeader>
                  <ModalBody className="flex justify-center items-center">
                    <Image
                      width={400}
                      alt="NextUI hero Image"
                      src={selectedItem.img}
                      className="w-full"
                    />
                    <div className="flex justify-center items-center">
                      {selectedItem.react === true ?
                        <span className=''><SiReact className='p-3 text-6xl text-white' /></span> :
                        ""}
                      {selectedItem.next === true ?
                        <span className=''><SiNextdotjs className='p-3 text-6xl text-white' /></span> :
                        ""}
                      {selectedItem.ts === true ?
                        <span className=''><SiTypescript className='p-3 text-6xl text-white' /></span> :
                        ""}
                      {selectedItem.tw === true ?
                        <span className=''><SiTailwindcss className='p-3 text-6xl text-white' /></span> :
                        ""}
                      {selectedItem.fm === true ?
                        <span className=''><SiNextui className='p-3 text-6xl text-white' /></span> :
                        ""}
                      {selectedItem.fm === true ?
                        <span className=''><SiFramer className='p-3 text-6xl text-white' /></span> :
                        ""}
                    </div>
                    <p>
                      {selectedItem.description}
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </div>
    </>
  );
}

