import { queryField, list } from 'nexus'

export const AssetClassAggregateQuery = queryField('aggregateAssetClass', {
  type: 'AggregateAssetClass',
  args: {
    where: 'AssetClassWhereInput',
    orderBy: list('AssetClassOrderByInput'),
    cursor: 'AssetClassWhereUniqueInput',
    distinct: 'AssetClassScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetClass.aggregate({ ...args, ...select }) as any
  },
})
