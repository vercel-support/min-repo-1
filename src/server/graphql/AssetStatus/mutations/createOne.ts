import { mutationField, nonNull } from 'nexus'

export const AssetStatusCreateOneMutation = mutationField(
  'createOneAssetStatus',
  {
    type: nonNull('AssetStatus'),
    args: {
      data: nonNull('AssetStatusCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetStatus.create({
        data,
        ...select,
      })
    },
  },
)
