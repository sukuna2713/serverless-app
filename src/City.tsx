import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Box, Button, styled } from '@mui/material';
import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { CreateCityInput, ListCitiesQuery } from './API';
import { createCity } from './graphql/mutations';
import { listCities } from './graphql/queries';

/**
 * 入力欄の形式
 */
type submitState = {
    name: string;
    description: string;
}

const initiateState: submitState = {
    name: '',
    description: '',
}

/**
 * スタイル適用済のコンポーネント
 */
const StyledBox = styled(Box)(({ theme }) => ({
    margin: 16,
    height: 504,
    overflow: 'auto'
}))

export const City = () => {
    const [cities, setCities] = useState<CreateCityInput[]>([]);
    const [submitState, setSubmitState] = useState<submitState>(initiateState);

    useEffect(() => {
        fetchCities();
    }, [])

    const setInput = (key: string, value: string) => {
        setSubmitState({ ...submitState, [key]: value })
    }

    const fetchCities = async () => {
        try {
            const citiesData = (
                await API.graphql(graphqlOperation(listCities))
            ) as GraphQLResult<ListCitiesQuery>
            if (citiesData.data?.listCities?.items) {
                const city = citiesData.data.listCities.items as CreateCityInput[]
                setCities(city)
            }
        } catch (err) {
            console.log('fError fetching cities:', err)
        }
    }

    const addCity = async () => {
        try {
            if (!submitState.name || !submitState.description) return;
            const city: CreateCityInput = { ...submitState };
            setSubmitState(initiateState);
            (await API.graphql(graphqlOperation(createCity, { input: city }))) as GraphQLResult<CreateCityInput>;
            setCities([...cities, city]);
        } catch (err) {
            console.log('error adding city:', err);
        }
    }

    return (
        <div>
            <Box>
                <input
                    onChange={(e) => setInput('name', e.target.value)}
                    value={submitState.name}
                    placeholder='名前'
                />
                <input
                    onChange={(e) => setInput('description', e.target.value)}
                    value={submitState.description}
                    placeholder='説明'
                />
                <Button onClick={addCity}>投稿</Button>
            </Box>
            <StyledBox>
                {cities.map((city, index) => (
                    <Box
                        key={city.id ? city.id : index}
                    >
                        <p>{city.name}</p>
                        <p>{city.description}</p>
                    </Box>
                ))}
            </StyledBox>
        </div>
    )
}