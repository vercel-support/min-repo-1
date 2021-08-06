import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeCreateOneMutation = mutationField(
  'createOneAssetsAndLiabilitiesRecordType',
  {
    type: nonNull('AssetsAndLiabilitiesRecordType'),
    args: {
      data: nonNull('AssetsAndLiabilitiesRecordTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.create({
        data,
        ...select,
      })
    },
  },
)
