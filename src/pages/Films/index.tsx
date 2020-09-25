import React,{ useState, useEffect } from 'react';
import { Form, Row, Col, Input, Select, Button } from 'antd';

const zhuangtai = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};

const user = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

export interface TableListItem {
    key: number;
    name: string;
    containers: number;
    zt: string;
    user: string;
    time: number;
    memo: string;
}

const tableList: TableListItem[] = [];

for (let i = 0; i < 100; i += 1) {
    tableList.push({
        key: i,
        name: 'AppName',
        containers: Math.floor(Math.random() * 20),
        zt: zhuangtai[Math.floor(Math.random() * 10) % 4],
        user: user[Math.floor(Math.random() * user.length)],
        time: Date.now() - Math.floor(Math.random() * 100000),
        memo: i % 2 === 1 ? '备注是什么你自己猜吧反正很长' : '简短备注文案',
    });
}


const Films: React.FC<{}> = () => {

    

    return(
        <F
    )
}

export default Films