import { mutationField, nonNull } from 'nexus'

export const AssetStatusReasonUpdateOneMutation = mutationField(
  'updateOneAssetStatusReason',
  {
    type: nonNull('AssetStatusReason'),
    args: {
      where: nonNull('AssetStatusReasonWhereUniqueInput'),
      data: nonNull('AssetStatusReasonUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.assetStatusReason.update({
        where,
        data,
        ...select,
      })
    },
  },
)
