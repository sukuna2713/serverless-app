import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Box, Button, styled } from '@mui/material';
import { API, graphqlOperation } from 'aws-amplify';
import React, { useContext, useEffect, useState } from 'react';
import { CreateCityInput, ListCitiesQuery } from './API';
import { AppContext } from './AppContext';
import { createCity } from './graphql/mutations';
import { listCities } from './graphql/queries';
import { onCreateCity } from './graphql/subscriptions';

/**
 * 入力欄の状態
 */
type inputState = {
    name: string;
    description: string;
}

const initialInput: inputState = {
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
    // Reducerと入力欄の状態
    const { state, dispatch } = useContext(AppContext);
    const [input, setInput] = useState(initialInput);

    useEffect(() => {
        fetchCities();
    }, [])

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, name: e.target.value });
    }

    const handleOnChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({ ...input, description: e.target.value });
    }

    const fetchCities = async () => {
        try {
            dispatch({ type: 'ACCESS_START' })
            const citiesData = (
                await API.graphql(graphqlOperation(listCities))
            ) as GraphQLResult<ListCitiesQuery>
            if (citiesData.data?.listCities?.items) {
                const cities = citiesData.data.listCities.items as CreateCityInput[]
                dispatch({ type: 'FETCH_SUCCESS', cities: cities })
            }
        } catch (err) {
            console.log('Error fetching cities:', err)
            dispatch({ type: 'FETCH_ERROR', error: `Error fetching cities: ${err}` })
        }
    }

    const addCity = async () => {
        try {
            if (!input.name || !input.description) return;
            const city: CreateCityInput = { ...input };
            setInput(initialInput);
            (await API.graphql(graphqlOperation(createCity, { input: city }))) as GraphQLResult<CreateCityInput>;
            dispatch({ type: 'MUTATE_SUCCESS', city: city });
        } catch (err) {
            console.log('Error adding city:', err);
            dispatch({ type: 'MUTATE_ERROR', error: `Error adding city: ${err}` })
        }
    }

    return (
        <div>
            <Box>
                <input
                    onChange={(e) => handleOnChangeName(e)}
                    value={input.name}
                    placeholder='名前'
                />
                <input
                    onChange={(e) => handleOnChangeDescription(e)}
                    value={input.description}
                    placeholder='説明'
                />
                <Button onClick={addCity}>投稿</Button>
            </Box>
            <StyledBox>
                {state.cities.map((city, index) => (
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