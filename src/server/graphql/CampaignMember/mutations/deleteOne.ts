import { mutationField, nonNull } from 'nexus'

export const CampaignMemberDeleteOneMutation = mutationField(
  'deleteOneCampaignMember',
  {
    type: 'CampaignMember',
    args: {
      where: nonNull('CampaignMemberWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.campaignMember.delete({
        where,
        ...select,
      })
    },
  },
)
