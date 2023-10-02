import React from 'react'
import fsPromises from 'fs/promises';
import path from 'path'
import Member from './member';

async function fetchTeam() {
    const filePath = path.join(process.cwd(), './app/about/teaminfo.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);

    return objectData;
}

export default async function page() {
    const team = await fetchTeam();
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        team.team.map((member) => (
                            (<Member key={member.id} member={member} />)
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
