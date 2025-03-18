'use client';
import { type FC, useState } from 'react';
import { View } from './view';

export const FavoriteModal: FC = () => {
  const [match, setMatch] = useState<string>();

  return <View match={match} setMatch={setMatch} />;
};
