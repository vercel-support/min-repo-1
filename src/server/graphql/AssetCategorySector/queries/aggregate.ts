import { queryField, list } from 'nexus'

export const AssetCategorySectorAggregateQuery = queryField(
  'aggregateAssetCategorySector',
  {
    type: 'AggregateAssetCategorySector',
    args: {
      where: 'AssetCategorySectorWhereInput',
      orderBy: list('AssetCategorySectorOrderByInput'),
      cursor: 'AssetCategorySectorWhereUniqueInput',
      distinct: 'AssetCategorySectorScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategorySector.aggregate({ ...args, ...select }) as any
    },
  },
)
