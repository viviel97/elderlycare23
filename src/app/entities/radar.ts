

export interface Radar{
    RadarId: number;
    active: boolean;
    Item: { ts: string;
            Activity: { heart: { N: number; }[];
                        breath: { N: number; }[]; };
            }[];
}[];
