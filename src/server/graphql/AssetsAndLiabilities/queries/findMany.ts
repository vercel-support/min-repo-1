import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesFindManyQuery = queryField(
  'findManyAssetsAndLiabilities',
  {
    type: nonNull(list(nonNull('AssetsAndLiabilities'))),
    args: {
      where: 'AssetsAndLiabilitiesWhereInput',
      orderBy: list('AssetsAndLiabilitiesOrderByInput'),
      cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilities.findMany({
        ...args,
        ...select,
      })
    },
  },
)
