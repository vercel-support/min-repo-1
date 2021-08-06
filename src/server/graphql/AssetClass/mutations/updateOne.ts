import { mutationField, nonNull } from 'nexus'

export const AssetClassUpdateOneMutation = mutationField(
  'updateOneAssetClass',
  {
    type: nonNull('AssetClass'),
    args: {
      where: nonNull('AssetClassWhereUniqueInput'),
      data: nonNull('AssetClassUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetClass.update({
        where,
        data,
        ...select,
      })
    },
  },
)
