"use client"
import React, {useEffect, useState} from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SubjectFilter = () => {
    const pathname=usePathname();

    const router = useRouter();
    const searchParams=useSearchParams();
    const query= searchParams.get('subject') || '';
    const [subject,setSubject] = useState(query);
    useEffect(() => {

        let newUrl='';
        if  (subject==='all')  {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            });

            //router.push(newUrl, { scroll: false });
        }
        else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });

            //router.push(newUrl, { scroll: false });
        }
        router.push(newUrl, { scroll: false });




    },[subject, pathname,router,searchParams]);
    return (
        <Select  onValueChange={ setSubject}  value={subject}>
            <SelectTrigger className=" relative border border-black rounded-lg items-center
        flex gap-2 px-2 py-1 h-fit " >
                <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent >
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem
                        key={subject}

                        value={subject}
                        className="capitalize">
                        {subject}
                    </SelectItem>
                ))}

            </SelectContent>
        </Select>
    )
}
export default SubjectFilter
