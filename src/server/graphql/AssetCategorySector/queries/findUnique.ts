import { queryField, nonNull } from 'nexus'

export const AssetCategorySectorFindUniqueQuery = queryField(
  'findUniqueAssetCategorySector',
  {
    type: 'AssetCategorySector',
    args: {
      where: nonNull('AssetCategorySectorWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetCategorySector.findUnique({
        where,
        ...select,
      })
    },
  },
)
