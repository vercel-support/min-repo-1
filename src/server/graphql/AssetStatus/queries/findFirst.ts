import { queryField, list } from 'nexus'

export const AssetStatusFindFirstQuery = queryField('findFirstAssetStatus', {
  type: 'AssetStatus',
  args: {
    where: 'AssetStatusWhereInput',
    orderBy: list('AssetStatusOrderByInput'),
    cursor: 'AssetStatusWhereUniqueInput',
    distinct: 'AssetStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetStatus.findFirst({
      ...args,
      ...select,
    })
  },
})
