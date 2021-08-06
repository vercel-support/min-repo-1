import { mutationField, nonNull } from 'nexus'

export const AssetStatusUpdateOneMutation = mutationField(
  'updateOneAssetStatus',
  {
    type: nonNull('AssetStatus'),
    args: {
      where: nonNull('AssetStatusWhereUniqueInput'),
      data: nonNull('AssetStatusUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetStatus.update({
        where,
        data,
        ...select,
      })
    },
  },
)
