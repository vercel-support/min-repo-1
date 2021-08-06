import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesTypeAggregateQuery = queryField(
  'aggregateAssetsAndLiabilitiesType',
  {
    type: 'AggregateAssetsAndLiabilitiesType',
    args: {
      where: 'AssetsAndLiabilitiesTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
