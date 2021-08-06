import { queryField, list } from 'nexus'

export const AssetCategoryAggregateQuery = queryField(
  'aggregateAssetCategory',
  {
    type: 'AggregateAssetCategory',
    args: {
      where: 'AssetCategoryWhereInput',
      orderBy: list('AssetCategoryOrderByInput'),
      cursor: 'AssetCategoryWhereUniqueInput',
      distinct: 'AssetCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategory.aggregate({ ...args, ...select }) as any
    },
  },
)
