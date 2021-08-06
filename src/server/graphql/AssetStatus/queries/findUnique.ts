import { queryField, nonNull } from 'nexus'

export const AssetStatusFindUniqueQuery = queryField('findUniqueAssetStatus', {
  type: 'AssetStatus',
  args: {
    where: nonNull('AssetStatusWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.assetStatus.findUnique({
      where,
      ...select,
    })
  },
})
