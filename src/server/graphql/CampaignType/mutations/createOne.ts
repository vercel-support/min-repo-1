import { mutationField, nonNull } from 'nexus'

export const CampaignTypeCreateOneMutation = mutationField(
  'createOneCampaignType',
  {
    type: nonNull('CampaignType'),
    args: {
      data: nonNull('CampaignTypeCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.campaignType.create({
        data,
        ...select,
      })
    },
  },
)
