import { mutationField, nonNull } from 'nexus'

export const AssetStatusReasonCreateOneMutation = mutationField(
  'createOneAssetStatusReason',
  {
    type: nonNull('AssetStatusReason'),
    args: {
      data: nonNull('AssetStatusReasonCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetStatusReason.create({
        data,
        ...select,
      })
    },
  },
)
