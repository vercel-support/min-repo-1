import { mutationField, nonNull } from 'nexus'

export const AssetClassCreateOneMutation = mutationField(
  'createOneAssetClass',
  {
    type: nonNull('AssetClass'),
    args: {
      data: nonNull('AssetClassCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetClass.create({
        data,
        ...select,
      })
    },
  },
)
