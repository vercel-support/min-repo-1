import { queryField, list } from 'nexus'

export const AssetClassFindFirstQuery = queryField('findFirstAssetClass', {
  type: 'AssetClass',
  args: {
    where: 'AssetClassWhereInput',
    orderBy: list('AssetClassOrderByInput'),
    cursor: 'AssetClassWhereUniqueInput',
    distinct: 'AssetClassScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetClass.findFirst({
      ...args,
      ...select,
    })
  },
})
