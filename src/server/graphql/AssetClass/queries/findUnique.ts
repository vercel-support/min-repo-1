import { queryField, nonNull } from 'nexus'

export const AssetClassFindUniqueQuery = queryField('findUniqueAssetClass', {
  type: 'AssetClass',
  args: {
    where: nonNull('AssetClassWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.assetClass.findUnique({
      where,
      ...select,
    })
  },
})
