import { queryField, nonNull, list } from 'nexus'

export const AssetStatusFindManyQuery = queryField('findManyAssetStatus', {
  type: nonNull(list(nonNull('AssetStatus'))),
  args: {
    where: 'AssetStatusWhereInput',
    orderBy: list('AssetStatusOrderByInput'),
    cursor: 'AssetStatusWhereUniqueInput',
    distinct: 'AssetStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetStatus.findMany({
      ...args,
      ...select,
    })
  },
})
