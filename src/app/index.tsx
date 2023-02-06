import { useState } from 'preact/hooks';
import Input from '@components/input';
import Button from '@components/button';

export function Index() {
    const [holder, setHolder] = useState<string>();
    const [cardNumber, setCardNumber] = useState<string>();
    const [month, setMonth] = useState<string>();
    const [year, setYear] = useState<string>();
    const [cvv, setCVV] = useState<string>();

    const cardNumberDisplay = cardNumber?.replace(/(\d{4})/g, '$1 ').trim();

    return (
        <div class="flex h-screen overflow-hidden">
            <div class="w-1/3 h-full p-4 bg-hero-violet bg-no-repeat bg-cover">
                <div class="flex flex-col h-full w-full items-end justify-center gap-y-8">
                    <div class="relative shadow-2xl translate-x-[150px]">
                        <img src="/images/bg-card-front.png" alt="" />
                        <div class="absolute inset-0 p-8">
                            <div class="grid place-content-between h-full">
                                <div>
                                    <img src="/images/card-logo.svg" alt="Card Logo" />
                                </div>
                                <div class="flex flex-col gap-y-4 w-[383px]">
                                    <div class="text-2xl font-bold tracking-[6px] text-white">{cardNumberDisplay ?? '1234 5678 9123 0000'}</div>
                                    <div class="flex justify-between">
                                        <div class="text-sm font-medium uppercase tracking-widest text-light-gray font-sans">{holder ?? 'Jane Appleseed'}</div>
                                        <div class="text-sm font-medium tracking-widest text-light-gray font-sans">
                                            {month ?? '00'}/{year ?? '23'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative shadow-2xl translate-x-[250px]">
                        <img src="/images/bg-card-back.png" alt="" />
                        <div class="absolute inset-0 px-12">
                            <div class="flex h-full justify-end items-center">
                                <div class="mb-1 text-md tracking-widest text-white">{cvv ?? '123'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-2/3">
                <div class="mx-auto max-w-[500px] h-full grid place-items-center">
                    <div>
                        <Input label={'CardHolder Name'} value={holder} onChange={setHolder} placeholder={'e.g. Jane Appleseed'} />
                        <Input label={'Card Number'} value={cardNumber} onChange={setCardNumber} placeholder={'e.g. 1234 5678 9012 3456'} />
                        <div class="flex gap-x-8">
                            <div className="flex gap-x-4">
                                <Input label={'Month'} value={month} onChange={setMonth} placeholder={'MM'} />
                                <Input label={'Year'} value={year} onChange={setYear} placeholder={'YY'} />
                            </div>
                            <Input label={'CVV'} value={cvv} onChange={setCVV} placeholder={'e.g. 123'} />
                        </div>

                        <Button>Confirm</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
