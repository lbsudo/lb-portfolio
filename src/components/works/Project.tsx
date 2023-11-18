"use client"
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { list } from '../../projects/projectData'
import { FaGithub, FaLink } from "react-icons/fa6";

export default function Project() {

  return (
    <div className="gap-2 grid grid-cols-2 ">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("project pressed, Hello from dev tools!")}>
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className=" object-cover relative"
              src={item.img}
            />
            <div className="absolute w-full z-10 ">
              <div className="flex space-x-2 w-full justify-end py-2 pr-2">
                <FaGithub className="text-2xl" />
                <FaLink className="text-2xl" />
              </div>
              {/* <p>A Project blahgahvao jsagoabw osnbgownbg obn owgoweb obw ogwbo bwogb bgwo gbjowbg owb owb oe btob totb</p> */}
            </div>
          </CardBody>
          <CardFooter>
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

