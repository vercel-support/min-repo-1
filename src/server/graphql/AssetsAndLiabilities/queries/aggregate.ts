import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesAggregateQuery = queryField(
  'aggregateAssetsAndLiabilities',
  {
    type: 'AggregateAssetsAndLiabilities',
    args: {
      where: 'AssetsAndLiabilitiesWhereInput',
      orderBy: list('AssetsAndLiabilitiesOrderByInput'),
      cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilities.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
