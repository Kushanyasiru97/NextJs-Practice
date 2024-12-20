import { NextRequest, NextResponse } from "next/server";
import { Result } from "postcss";

export function GET(_, response){
    console.log(response.params.id);

    const {id} = response.params;

    return NextResponse.json({id});
}