import { queryField, nonNull, list } from 'nexus'

export const AssetClassFindManyQuery = queryField('findManyAssetClass', {
  type: nonNull(list(nonNull('AssetClass'))),
  args: {
    where: 'AssetClassWhereInput',
    orderBy: list('AssetClassOrderByInput'),
    cursor: 'AssetClassWhereUniqueInput',
    distinct: 'AssetClassScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetClass.findMany({
      ...args,
      ...select,
    })
  },
})
